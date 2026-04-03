import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Docs-as-Code',
    Svg: require('@site/static/img/doc-as-code-learning.svg').default,
    description: (
      <>
        Learn modern documentation workflows using Git, Markdown, and CI/CD.
      </>
    ),
  },
  {
    title: 'Technical Writing',
    Svg: require('@site/static/img/tech-writing.svg').default,
    description: (
      <>
        Find practical examples of tutorials, guides, and troubleshooting documentation.
      </>
    ),
  },
  {
    title: 'Experiments',
    Svg: require('@site/static/img/experimenting-with-front-end.svg').default,
    description: (
      <>
        Discover a playground for MDX, React components, tabs, code blocks, and more.
      </>
    ),
  },
  {
    title: 'Internal',
    description: (
      <>
        Share findings from the discovery phase to establish a solid doc base.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
