import React, {Component} from 'react';


export function withScroll(OriginalComponent) {
    return class extends React.Component {
        // make some enhancements

        render() {

            //return original component with additional props
            return <OriginalComponent {...this.props}/>
        }
    }
}
