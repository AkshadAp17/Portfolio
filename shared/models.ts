import mongoose, { Schema, Document } from 'mongoose';

// User interface and schema
export interface IUser extends Document {
  username: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true
});

export const User = mongoose.model<IUser>('User', userSchema);

// Contact Submission interface and schema
export interface IContactSubmission extends Document {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  budget?: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const contactSubmissionSchema = new Schema<IContactSubmission>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  budget: { type: String },
  message: { type: String, required: true }
}, {
  timestamps: true
});

export const ContactSubmission = mongoose.model<IContactSubmission>('ContactSubmission', contactSubmissionSchema);

// Type definitions for API
export type InsertUser = {
  username: string;
  password: string;
};

export type InsertContactSubmission = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  budget?: string;
  message: string;
};