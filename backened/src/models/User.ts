import mongoose from "mongoose";
import { randomUUID } from "crypto";

const chatSchema = new mongoose.Schema({
    id: {
        type: String,
        default: () => randomUUID(), // Use a function for default UUID generation
    },
    role: {
        type: String,
        required: true, // Fix typo here
    },
    content: {
        type: String,
        required: true, // Fix typo here
    },
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Replace TextTrackCue with true
    },
    email: {
        type: String,
        required: true, // Fix typo here
        unique: true,
    },
    password: {
        type: String, // Fix typo here
        required: true,
    },
    chats: [chatSchema],
});

export default mongoose.model("User", userSchema);
