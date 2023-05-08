import type {PlasmoCSConfig} from "~node_modules/plasmo";

console.log(
    "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
)

// let element = document.querySelector("div[class^='PageWithSidebarLayout_centeringDiv'] > section") as HTMLDivElement;
// console.log("hahah",element);
// element.style.maxWidth = '100%'
// element.style.width = '80%'
//
// document.querySelector("#__next > div.PageWithSidebarLayout_centeringDiv___L9br > section > div > div > div:nth-child(16) > div:nth-child(2) > div.ChatMessage_messageWrapper__Zf87D > div.Message_row___ur0Y > div.Message_botMessageBubble__CPGMI")

export const config: PlasmoCSConfig = {
    matches: ["https://poe.com/*"],
    css: ["styles.css"]
}