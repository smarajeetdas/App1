import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for Relay application
  app.get('/api/capabilities', (_req, res) => {
    res.json({
      functional: {
        title: "Functional Automation",
        description: "No-Code Automation Framework to test business workflows to ensure expected behavior."
      },
      performance: {
        title: "Performance Lab",
        description: "Reuse functional test cases to execute multi-region, scalable, real-world scenarios that evaluates application performance under diverse load conditions."
      },
      mobile: {
        title: "Mobile Automation",
        description: "Conduct seamless mobile application tests on physical (Android, iOS) and cloud-based devices (Sauce Labs)."
      },
      desktop: {
        title: "Desktop Automation",
        description: "Unified testing across Windows and macOS with enhanced data-driven test cases that support validation and reporting."
      },
      chaos: {
        title: "Chaos Simulator",
        description: "Introduce failure. Build confidence. Empower your teams with controlled chaos engineering to uncover system weaknesses before your customers do."
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
