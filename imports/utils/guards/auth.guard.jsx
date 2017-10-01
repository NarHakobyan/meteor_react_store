import { Meteor } from 'meteor/meteor';
import React from 'react';

export default BaseComponent => {
    
    class routeOnEnterComponent extends React.Component {
        componentWillMount() {
            if (!Meteor.userId()) {
                const { history, location } = this.props;
                history.replace(`/login/?redirect=${location.pathname}`);
            }
        }
        
        render() {
            return <BaseComponent {...this.props} />;
        }
    }
    
    return routeOnEnterComponent;
};