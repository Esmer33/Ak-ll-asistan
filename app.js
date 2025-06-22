const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    const userText = input.value;
    chatBox.innerHTML += `<div><strong>Sen:</strong> ${userText}</div>`;
    input.value = "";

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: userText }]
      })
    });

    const data = await response.json();
    const botReply = data.choices[0].message.content;
    chatBox.innerHTML += `<div><strong>AI:</strong> ${botReply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
