const form = document.getElementById("chat-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // sayfanın yenilenmesini engeller
  const userText = input.value.trim();
  if (userText === "") return;

  chatBox.innerHTML += `<div><strong>Sen:</strong> ${userText}</div>`;
  input.value = "";

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer sk-anahtarın_buraya",
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
});
