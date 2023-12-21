import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return <div style={{ height: '100vh' }}>
        <PrettyChatWindow 
            projectId='13dfac7a-14ee-4ea1-8f62-28edde0b81f6'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
    </div>
}

export default ChatsPage;