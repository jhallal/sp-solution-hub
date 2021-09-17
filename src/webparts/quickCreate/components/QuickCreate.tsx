import * as React from 'react';
import styles from './QuickCreate.module.scss';
import { IQuickCreateProps } from './IQuickCreateProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class QuickCreate extends React.Component < IQuickCreateProps, {} > {
  public render(): React.ReactElement<IQuickCreateProps> {
    return(
      <div className = { styles.quickCreate } >
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href='https://aka.ms/spfx' className={styles.button}>
                <span className={styles.label}>Learn more about this new WebPart</span>
              </a>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>

        <button type="button" className="btn btn-link">Link</button>
      </div >
    );
  }
}
