import { image } from "@nextui-org/react";
import { link } from "fs";

// Save this in a file such as contentData.js
const contentData = {
  whatsapp_link: "https://chat.whatsapp.com/JNWPTs2NwBf1sTaHMF4t3Y",
  form_link:
    "https://docs.google.com/forms/d/1AWch9cXvkOtvlDGXiYe31th86wNJ5eYnoq_GSQJ1wEs/viewform",
  club: {
    logo: "/AISociety_Logo_Dark.png",
    name: "Artificial Intelligence Society (AIS)",
    supportedBy: "Training Minds one Epoch at a Time",
    logos: ["/bennett-logo.webp", "/cabinet-logo.png"],
    about: {
      text: "The AI Specialization Club (AIS) at Bennett University is dedicated to fostering a deep passion for Artificial Intelligence. The club engages in end-to-end project development, achieves victories in hackathons, conducts informative workshops, upskills members through guidance from senior student mentors as well as experienced faculty members. We actively participate in open-source development as well.",
      image: "/ais-hero.jpg",
    },
    events: [

      {
        title: "Campus AI Fest",
        description:
          "Talks by Google Developer Experts, project showcases, and explorations of KerasCV, KerasNLP, and Vertex AI.",
        date: "October 14, 2023",
        image: "/event-ai-fest.png",
        link: "#",
      },
      {
        title: "LLM Workshop",
        description:
          "Custom Recipe Generation LLM, awards for top-performing students, exploration of Langchain, OpenAI, Kaggle, and Pandas.",
        date: "November 23, 2023",
        image: "/event-llm-workshop.png",
        link: "#",
      },
      {
        title: "Build-it-Yourself Workshop",
        description:
          "Transformer-Based NER e-commerce chatbot, FastAPI deployment, exploration of Keras, TensorFlow, HuggingFace, and FastAPI.",
        date: "February 12-17, 2024",
        image: "/event-biy.png",
        link: "#",
      },
      {
        title: 'Copilot Lab Inaugration Ceremony',
        description: "Inaugration Ceremony and Workshop for the Copilot Lab sponsored by Microsoft. Included guest sessions from Top Experts",
        date: "August 13, 2024",
        image: "/event-copilot-inaug.png",
        link: "#",
      },
      {
        title: "Club Carnival and Freshers Orientation",
        description: "Freshers Orientation and Club Carnival for the new batch of students. Included a variety of fun demos, games and fun events",
        date: "August 23, 2024",
        image: "/event-carnival.png",
        link: "#",
      },
      {
        title: "AI 101",
        description: "Introductory hands-on workshop for freshers incuding multidisciplinary sessions across Artificial Intelligence and Machine Learning",
        date: "September 19, 2024",
        image: "/event-ai101.png",
        link: "#",
      },


    ],
    leadership: [
      {
        name: "Mann Acharya",
        position:
          "President (3rd Year, B.Tech CSE, Google Certified ML Engineer)",
        photo: "https://picsum.photos/120?random=11",
      },
      {
        name: "Moaksh Kakkar",
        position: "Vice President (2nd Year, B.Tech CSE)",
        photo: "https://picsum.photos/120?random=12",
      },
      {
        name: "Manya Mahajan",
        position: "General Secretary (2nd Year, B.Tech CSE)",
        photo: "https://picsum.photos/120?random=13",
      },
      {
        name: "Dr. Jagendra Singh",
        position: "Senior IEEE Member, Associate Professor",
        photo: "https://picsum.photos/120?random=8",
      },
      {
        name: "Dr. Nitin Shelke",
        position: "Associate Professor",
        photo: "https://picsum.photos/120?random=9",
      },
      {
        name: "Dr. Tej Bahadur Chandra",
        position: "Associate Professor",
        photo: "https://picsum.photos/120?random=10",
      },
    ],
    projects: [
      {
        title: "Specialization Chatbot",
        description: "A chatbot that provides course data and job information.",
        image: "https://picsum.photos/300/200?random=14",
      },
      {
        title: "ViT from Scratch",
        description: "An implementation of Vision Transformers in PyTorch.",
        image: "https://picsum.photos/300/200?random=21",
      },
      {
        title: "Fullstack AI Template",
        description:
          "A fully deployed web app example using FastAPI and Sklearn.",
        image: "https://picsum.photos/300/200?random=15",
      },
      {
        title: "Document RAG",
        description: "A fullstack AI project for document interaction.",
        image: "https://picsum.photos/300/200?random=16",
      },
      {
        title: "Lane Detection for Cars",
        description:
          "Arduino integrated lane detection using YOLO, OpenCV, and TensorFlow.",
        image: "https://picsum.photos/300/200?random=17",
      },
      {
        title: "Bonsai: Project Search",
        description: "A natural language project idea search tool.",
        image: "https://picsum.photos/300/200?random=18",
      },
      {
        title: "Web Sentiment Analysis",
        description:
          "A dashboard for sentiment analysis using NLP and LLM models.",
        image: "https://picsum.photos/300/200?random=19",
      },
      {
        title: "CandyNLP",
        description: "A fast C++ package for NLP tasks.",
        image: "https://picsum.photos/300/200?random=20",
      },
      {
        title: "Gesture Detection",
        description: "Cursor movement using a deep learning model.",
        image: "https://picsum.photos/300/200?random=22",
      },
    ],
    publications: [
      {
        title: "Multimodal-LLMs",
        description: "Fusion strategies for multimodal understanding.",
        image: "https://picsum.photos/300/200?random=23",
      },
      {
        title: "UCD_Net",
        description:
          "Advanced lung disease classification using dilated convolution.",
        image: "https://picsum.photos/300/200?random=24",
      },
      {
        title: "Benchmarks for Sanskrit LLM Evaluation",
        description:
          "Creating benchmarks for Sanskrit language LLM evaluation.",
        image: "https://picsum.photos/300/200?random=25",
      },
    ],
  },
};

export default contentData;
