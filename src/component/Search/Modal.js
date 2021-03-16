import React from 'react'
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left:'50%',
    transform:'translate(-50%, -50%)',
    backgroundColor :'#FFF',
    padding: '50px',
    zIndex:1000
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor :'rgba(0,0,0,0.5)',
    
    zIndex:1000
}

export default function Modal({ open, children,close}) {
    if(!open) return null
    return (
        <div>
            <div style = {OVERLAY_STYLE} />
            <div style = {MODAL_STYLES}>
            <button onClick = {close}>Close</button>
            {children}
            </div>
        </div>
    )
}
