import { User, ContactSubmission, type IUser, type IContactSubmission, type InsertUser, type InsertContactSubmission } from "@shared/models";
import { isMongoConnected } from "./mongodb";

export interface IStorage {
  getUser(id: string): Promise<IUser | null>;
  getUserByUsername(username: string): Promise<IUser | null>;
  createUser(user: InsertUser): Promise<IUser>;
  createContactSubmission(submission: InsertContactSubmission): Promise<IContactSubmission>;
  getContactSubmissions(): Promise<IContactSubmission[]>;
}

// In-memory storage as fallback
class MemoryStorage {
  private users: Map<string, any> = new Map();
  private contacts: Array<any> = [];
  
  async createContactSubmission(data: InsertContactSubmission) {
    const submission = {
      _id: Date.now().toString(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.contacts.push(submission);
    return submission;
  }
  
  async getContactSubmissions() {
    return this.contacts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async createUser(data: InsertUser) {
    const user = {
      _id: Date.now().toString(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.users.set(user._id, user);
    return user;
  }
  
  async getUser(id: string) {
    return this.users.get(id) || null;
  }
  
  async getUserByUsername(username: string) {
    for (const user of this.users.values()) {
      if (user.username === username) return user;
    }
    return null;
  }
}

const memoryStorage = new MemoryStorage();

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<IUser | null> {
    if (isMongoConnected()) {
      return await User.findById(id);
    }
    return await memoryStorage.getUser(id);
  }

  async getUserByUsername(username: string): Promise<IUser | null> {
    if (isMongoConnected()) {
      return await User.findOne({ username });
    }
    return await memoryStorage.getUserByUsername(username);
  }

  async createUser(insertUser: InsertUser): Promise<IUser> {
    if (isMongoConnected()) {
      const user = new User(insertUser);
      return await user.save();
    }
    return await memoryStorage.createUser(insertUser);
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<IContactSubmission> {
    if (isMongoConnected()) {
      const submission = new ContactSubmission(insertSubmission);
      return await submission.save();
    }
    return await memoryStorage.createContactSubmission(insertSubmission);
  }

  async getContactSubmissions(): Promise<IContactSubmission[]> {
    if (isMongoConnected()) {
      return await ContactSubmission.find().sort({ createdAt: -1 });
    }
    return await memoryStorage.getContactSubmissions();
  }
}

export const storage = new DatabaseStorage();
