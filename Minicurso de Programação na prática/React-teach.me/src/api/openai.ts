import OpenAI from "openai";

type Message = {
    role: 'user' | 'assistant'
    content: string
}

const openai = new OpenAI({
    apiKey: '',
    dangerouslyAllowBrowser: true
})

export async function sendMessage(messages: Message[]) {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messages.map(message => (
            { role: message.role, content: message.content }
        ))
    })

    return {
        role: response.choices[0].message.role,
        content: response.choices[0].message.content || ''
    }
}

