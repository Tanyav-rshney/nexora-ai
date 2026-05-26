
const toolsData = [

  // ===== PRODUCTIVITY =====

  {
    id: 1,
    name: "ChatGPT",
    category: "Productivity",
    description: "AI assistant for writing and coding.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968885.png",
    link: "https://chat.openai.com",
  },

  {
    id: 2,
    name: "Claude",
    category: "Productivity",
    description: "Advanced AI assistant with reasoning.",
    image: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
    link: "https://claude.ai",
  },

  {
    id: 3,
    name: "Gemini",
    category: "Productivity",
    description: "Google AI assistant.",
    image: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    link: "https://gemini.google.com",
  },

  {
    id: 4,
    name: "Perplexity",
    category: "Productivity",
    description: "AI-powered search engine.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
    link: "https://perplexity.ai",
  },

  {
    id: 5,
    name: "Notion AI",
    category: "Productivity",
    description: "Smart AI workspace assistant.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
    link: "https://www.notion.so/product/ai",
  },

  {
    id: 6,
    name: "Grammarly",
    category: "Productivity",
    description: "Grammar and writing correction AI.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968864.png",
    link: "https://www.grammarly.com",
  },

  // ===== CODING =====

  {
    id: 7,
    name: "GitHub Copilot",
    category: "Coding",
    description: "AI coding assistant.",
    image: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    link: "https://github.com/features/copilot",
  },

  {
    id: 8,
    name: "Replit AI",
    category: "Coding",
    description: "Code with AI directly in browser.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    link: "https://replit.com",
  },

  {
    id: 9,
    name: "Tabnine",
    category: "Coding",
    description: "AI autocomplete coding tool.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968706.png",
    link: "https://www.tabnine.com",
  },

  {
    id: 10,
    name: "Blackbox AI",
    category: "Coding",
    description: "AI code search and generation.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968708.png",
    link: "https://www.blackbox.ai",
  },

  // ===== IMAGE =====

  {
    id: 11,
    name: "Midjourney",
    category: "Image",
    description: "Generate AI artwork instantly.",
    image: "https://cdn-icons-png.flaticon.com/512/6033/6033716.png",
    link: "https://www.midjourney.com",
  },

  {
    id: 12,
    name: "DALL-E",
    category: "Image",
    description: "Create AI images from prompts.",
    image: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    link: "https://openai.com/dall-e",
  },

  {
    id: 13,
    name: "Adobe Firefly",
    category: "Image",
    description: "Professional AI image generator.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
    link: "https://firefly.adobe.com",
  },

  {
    id: 14,
    name: "Lexica",
    category: "Image",
    description: "Stable diffusion image search.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968707.png",
    link: "https://lexica.art",
  },

  // ===== DESIGN =====

  {
    id: 15,
    name: "Canva AI",
    category: "Design",
    description: "Create designs with AI.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    link: "https://www.canva.com",
  },

  {
    id: 16,
    name: "Photopea",
    category: "Design",
    description: "Online Photoshop alternative.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968525.png",
    link: "https://www.photopea.com",
  },

  {
    id: 17,
    name: "Remove.bg",
    category: "Design",
    description: "Remove image backgrounds instantly.",
    image: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
    link: "https://www.remove.bg",
  },

  {
    id: 18,
    name: "Cleanup Pictures",
    category: "Design",
    description: "Remove unwanted objects from photos.",
    image: "https://cdn-icons-png.flaticon.com/512/484/484167.png",
    link: "https://cleanup.pictures",
  },

  // ===== VOICE =====

  {
    id: 19,
    name: "ElevenLabs",
    category: "Voice",
    description: "Realistic AI voice generation.",
    image: "https://cdn-icons-png.flaticon.com/512/727/727245.png",
    link: "https://elevenlabs.io",
  },

  {
    id: 20,
    name: "Krisp",
    category: "Voice",
    description: "AI noise cancellation.",
    image: "https://cdn-icons-png.flaticon.com/512/727/727269.png",
    link: "https://krisp.ai",
  },

  {
    id: 21,
    name: "Suno AI",
    category: "Voice",
    description: "Generate songs using AI.",
    image: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png",
    link: "https://suno.ai",
  },

  // ===== VIDEO =====

  {
    id: 22,
    name: "Runway ML",
    category: "Video",
    description: "AI video editing platform.",
    image: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
    link: "https://runwayml.com",
  },

  {
    id: 23,
    name: "Kapwing",
    category: "Video",
    description: "Online AI video editor.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968523.png",
    link: "https://www.kapwing.com",
  },

  {
    id: 24,
    name: "Pika Labs",
    category: "Video",
    description: "AI animation generator.",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    link: "https://pika.art",
  },

  // ===== AUTOMATION =====

  {
    id: 25,
    name: "Zapier AI",
    category: "Automation",
    description: "Automate workflows using AI.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968890.png",
    link: "https://zapier.com",
  },

  {
    id: 26,
    name: "IFTTT",
    category: "Automation",
    description: "Connect and automate apps.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968872.png",
    link: "https://ifttt.com",
  },

];

export default toolsData;

