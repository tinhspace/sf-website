import * as Accordion from '@radix-ui/react-accordion'
import { useMediaQuery, useRect } from '@studio-freight/hamo'
import cn from 'clsx'
import { AppearText } from 'components/appear-text'
import { Image } from 'components/image'
import { Link } from 'components/link'
import { fetchCmsQuery } from 'contentful/api'
import { homePageQuery } from 'contentful/queries/home.graphql'
import { usePageAppear } from 'hooks/use-page-appear'
import { Layout } from 'layouts/default'
import { slugify } from 'lib/slugify'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import s from './home.module.scss'

const Arrow = dynamic(() => import('icons/arrow.svg'), { ssr: false })
const Slider = dynamic(() => import('components/slider'), { ssr: false })

export default function Home({ data }) {
  const visible = usePageAppear()
  const isMobile = useMediaQuery('(max-width: 800px)')
  const [portrait, setPortrait] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)
  const [setRef, rect] = useRect()
  let timer = 0
  const TIMEOUT = 500

  const mouseEnter = (projectId) => {
    timer = setTimeout(() => {
      setSelectedProject(projectId)
    }, TIMEOUT)
  }

  const mouseLeave = () => {
    clearTimeout(timer)
  }

  useEffect(() => {
    setPortrait(rect.width < 800)
  }, [rect])

  return (
    <Layout theme="dark" data={data}>
      {isMobile === true ? (
        <section className={s.sliders}>
          <Accordion.Root collapsible>
            {data.projects.items.map((project, i) => (
              <div className={s['slider__wrapper']} key={i}>
                <Accordion.Item value={slugify(project.title)}>
                  <Slider>
                    {project.imgs.items.map((img, idx) => {
                      return (
                        <div className={s['slide__image']} key={idx}>
                          <Image
                            src={img.url}
                            alt=""
                            priority={i === 0}
                            height={294}
                            width={165}
                            sizes="(max-width: 800px) 50vw"
                          />
                        </div>
                      )
                    })}
                  </Slider>
                  <Accordion.Header className={s.details}>
                    <Link href={project.url}>
                      <h2 className={cn('p-l', s.title)}>{project.title}</h2>
                      <h3 className={cn('p-l', s.link)}>
                        Visit Site <Arrow />
                      </h3>
                    </Link>
                    <Accordion.Trigger>
                      <p className="p">Read More +</p>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className={s.content}>
                    <p className={s.title}>{project.title}</p>
                    {project.description && (
                      <p className={s.description}>{project.description}</p>
                    )}
                    {project.work && <p className={s.work}>{project.work}</p>}
                  </Accordion.Content>
                </Accordion.Item>
              </div>
            ))}
          </Accordion.Root>
        </section>
      ) : (
        <section className={cn(s.content, 'layout-grid')}>
          <ul className={s.list}>
            {data.projects.items
              .slice(0, data.projects.items.length / 2)
              .map((project, i) => (
                <li
                  key={i}
                  className={cn('p-l', selectedProject === i && s.active)}
                  onPointerEnter={() => mouseEnter(i)}
                  onPointerLeave={() => mouseLeave()}
                >
                  <p className={s.title}>
                    <AppearText visible={visible}>{project.title} </AppearText>
                  </p>
                  <Link className={cn(s.link, 'decorate')} href={project.url}>
                    <AppearText visible={visible}> Visit Site </AppearText>
                    <Arrow />
                  </Link>
                </li>
              ))}
          </ul>
          <ul className={s.list}>
            {data.projects.items
              .slice(-(data.projects.items.length / 2))
              .map((project, i) => (
                <li
                  key={i}
                  className={cn('p-l', selectedProject === i + 4 && s.active)}
                  onPointerEnter={() => mouseEnter(i + 4)}
                  onPointerLeave={() => mouseLeave()}
                >
                  <p className={s.title}>
                    <AppearText visible={visible}>{project.title}</AppearText>
                  </p>
                  <Link className={cn(s.link, 'decorate')} href={project.url}>
                    <AppearText visible={visible}>Visit Site</AppearText>
                    <Arrow />
                  </Link>
                </li>
              ))}
          </ul>
          <div
            className={s.wrapper}
            ref={(node) => {
              setRef(node)
            }}
          />
          <div
            style={{ '--iframe-delay': '500ms' }}
            className={cn(s.image, portrait && s.portrait, visible && s.show)}
          >
            {data.projects.items.map((project, i) => (
              <iframe
                loading={i !== 0 || isMobile === true ? 'lazy' : 'eager'}
                key={i}
                src={project.url}
                allowFullScreen
                frameBorder="0"
                className={cn(selectedProject === i && s.visible)}
              />
            ))}
          </div>
        </section>
      )}
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const [{ studioFreightHome }] = await Promise.all([
    fetchCmsQuery(homePageQuery, {
      preview,
      id: '5pTuQpYGzcynKXxq5QOn0F',
    }),
  ])

  return {
    props: {
      data: studioFreightHome,
      id: 'home',
    },
    revalidate: 30,
  }
}
