import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Instant Money Transfer',
    Svg: require('@site/static/img/speed-feature.svg').default,
    description: (
      <>
       Neatio is an ultra fast blockchain network, with sub-second transactions confirmation which makes it ideal for day to day use.
      </>
    ),
  },
  {
    title: 'No Subsequent Confirmations',
    Svg: require('@site/static/img/no-conf.svg').default,
    description: (
      <>
        Say goodbye to network congestion and block confirmations waiting time. Neatio transactions reach finality within the same block.
      </>
    ),
  },
  {
    title: 'Eco Friendly Blockchain',
    Svg: require('@site/static/img/eco-svg.svg').default,
    description: (
      <>
        Neatio platform is using the (Proof-Of-Stake) mechanism to verify blocks, making it energy efficient, thus environmentally friendly. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
