import React from 'react'


type PropsType = {
    title: string
}

const Title = (props: PropsType) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Title