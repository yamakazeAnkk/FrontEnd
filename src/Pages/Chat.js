import React from 'react'
import "../Pages/Chat.css"

export default function Chat() {
  return (
    <div className="chat-container">
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="list-group">
                        <a href="#" className="list-group-item active">
                            Chatroom 1
                        </a>
                        <a href="#" className="list-group-item">Chatroom 2</a>
                        <a href="#" className="list-group-item">Chatroom 3</a>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-3">
                                <div className="d-flex justify-content-start mb-4">
                                    <div className="msg_cotainer">
                                        Hi, how are you?
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        Hi, I am good. How about you?
                                    </div>
                                </div>
                            </div>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Type your message..."/>
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
