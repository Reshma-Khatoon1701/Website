import { MessageCircle } from "lucide-react";

export default function ChatButton(){
    return(
        <button className="chat-btn">
        <MessageCircle size={18} />
        <span> Chat with AI </span>
        </button>
    );
}