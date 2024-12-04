import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extraTime';

const Message = ({message}) => {

  const {authUser}=useAuthContext();
  const {selectedConversation}=useConversation()
  const fromMe=message.senderId===authUser._id;
  const formatDate=extractTime(message.createdAt)
  const chatClassname=fromMe?'chat-end':'chat-start';
  const profilePic=fromMe? authUser.profilePic:selectedConversation?.profilePic;
  const bubbleBgColor=fromMe?'bg-blue-500':'';
  const shakeClass=message.shouldShake?"shake":""
  return (
    <div className={`chat ${chatClassname}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic}/>
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs gap-1 items-center text-white">{formatDate}</div>
    </div>


  )
}

export default Message