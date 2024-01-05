import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';

class BackToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: this.props.offset || 1000,
            show: false
        };
    }

    scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    handleAnchorLinkClick = (event) => {
        const { target } = event;

        // Check if the clicked target is an anchor link
        if (target.tagName.toLowerCase() === 'a' && target.hash) {
            const anchor = target.hash.substring(1);
            const element = document.getElementById(anchor);

            if (element) {
                event.preventDefault();
                element.scrollIntoView();
            }
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > this.state.offset) {
                this.setState({
                    ...this.state,
                    show: true
                });
            } else {
                this.setState({
                    ...this.state,
                    show: false
                });
            }
        });

        // Handle anchor link clicks within the component
        document.addEventListener('click', this.handleAnchorLinkClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleAnchorLinkClick);
    }

    render() {
        return (
            <>
                {this.state.show && (
                    <button className="back-to-top" type="button" onClick={this.scrollToTop}>
                        <i className="fa fa-chevron-up"></i>
                    </button>
                )}
            </>
        );
    }
}

export default BackToTop;
