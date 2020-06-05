import React from 'react'
import ReactPlayer from 'react-player'
import '../css/ResponsivePlayer.css'

export default class ResponsivePlayer extends React.Component {
    render() {
        return (
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={this.props.url}
                    width='100%'
                    height='100%'
                />
            </div>
        )
    }
}