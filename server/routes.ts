import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Define validation schemas for MongoDB
const insertContactSubmissionSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  budget: z.string().optional(),
  message: z.string().min(1),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      console.log('Received contact form data:', req.body);
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      console.log('Validated data:', validatedData);
      const submission = await storage.createContactSubmission(validatedData);
      console.log('Created submission:', submission);
      res.json({ success: true, id: submission._id });
    } catch (error) {
      console.error('Contact form error:', error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error",
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
