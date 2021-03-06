import React from 'react'
import {Avatar,Button} from '@material-ui/core';
import "./TweetBox.css";


function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar />
                     <input placeholder="What's happening" type="text" />
                </div>
                <Button className="tweetBox__tweetButton">Tweet</Button>   
            </form>
            
        </div>
    )
}

export default TweetBox
