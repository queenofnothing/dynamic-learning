import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    Meteor.subscribe('getAccounts');
    Meteor.subscribe('classes');

    Tracker.autorun(() => {
      if (Meteor.user()) {
        this.setState({
          user: Meteor.user().username,
        })
        ; 
}
      if (Meteor.user() && Meteor.user().services) {
        if (Meteor.user().services.github) {
          Meteor.call('setUsername', Meteor.user()._id, Meteor.user().services.github.username);
        } else if (Meteor.user().services.google) {
          Meteor.call('setUsername', Meteor.user()._id, Meteor.user().services.google.email);
        }
      }
    });
  }

  render() {
    return (
      <div id="menu">
        <Link to="profile" style={{ paddingLeft: '0.8rem', marginTop: '0.8rem' }}>{`${this.state.user}`}</Link>
        <ul>

          <Menu vertical style={{ marginTop: '0.8rem' }}>
            <Link to="workbooks"><Menu.Item link>Manage workbooks</Menu.Item></Link>
            <Link to="lessons"><Menu.Item link>Manage lessons</Menu.Item></Link>
            <Link to="classes">
              {' '}
              <Menu.Item link>Classes</Menu.Item>
            </Link>
            <Link to="uploadsim"><Menu.Item link>Manage simulations</Menu.Item></Link>
            <Link to="requests"><Menu.Item link>Discussion forums</Menu.Item></Link>
            <Link to="watchlesson"><Menu.Item link>Watch lesson</Menu.Item></Link>
          </Menu>

        </ul>
      </div>
    );
  }
}
