import React, { Component } from "react";
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon } from "react-share";


class SharingButtons extends Component {
    
    
    render() {
        
        const url = window.location.href;

        return (<div>
            <TwitterShareButton
                url={url}
            >

                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <FacebookShareButton
                url={url}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton
            url={url}           
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>

        </div>
        )
    }
}
export default SharingButtons;