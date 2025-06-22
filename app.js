const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userText = input.value.trim();
  if (userText === "") return;

  chatBox.innerHTML += `<div><strong>Sen:</strong> ${userText}</div>`;
// ...
chatBox.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;

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
  const reply = data.choices[0].message.content;

  chatBox.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
});
