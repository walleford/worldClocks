import * as React from 'react';
import styles from './WorldClocks.module.scss';
import { IWorldClocksProps } from './IWorldClocksProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { useEffect, useState } from 'react';
import Clock from 'react-live-clock';
import { noWrap } from 'office-ui-fabric-react';



export default class WorldClocks extends React.Component<IWorldClocksProps, {}> {
  public render(): React.ReactElement<IWorldClocksProps> {

    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    return (
      <div className={`${styles.grid}`}>
        <div className={`${styles.title}`} >Honolulu HI</div>
        <div className={`${styles.title}`}>Offutt NE</div>
        <div className={`${styles.title}`}>Washington, DC</div>
        <div className={`${styles.title}`}>GMT</div>
        <div className={`${styles.title}`}>Germany</div>
        <div className={`${styles.title}`}>Moscow</div>
        <div className={`${styles.title}`}>Bangkok, Thailand</div>
        <div className={`${styles.title}`}>Hanoi, Vietnam</div>
        <div className={`${styles.title}`}>Vientiane, Laos</div>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Hawaii'}/>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Central'}/>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'}/>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'GMT'}/>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Berlin'}/>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Moscow'}/>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Bangkok'}/>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Ho_Chi_Minh'}/>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Vientiane'}/>

      </div>
    );
  }
}
