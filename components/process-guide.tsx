"use client"

import { useState } from "react"
import { CheckCircle2, Circle, ArrowRight } from "@/components/ui/icons"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function ProcessGuide() {
  const [activeStage, setActiveStage] = useState("ideation")

  const stages = [
    {
      id: "ideation",
      title: "Ideation & Validation",
      description: "Validate your business idea and identify your target market",
      steps: [
        {
          title: "Problem Identification",
          description: "Clearly define the problem your startup aims to solve",
          resources: ["Market Research Template", "Problem Statement Guide", "Customer Interview Framework"],
        },
        {
          title: "Solution Validation",
          description: "Test your proposed solution with potential customers",
          resources: ["MVP Planning Worksheet", "Validation Testing Guide", "Feedback Collection Templates"],
        },
        {
          title: "Market Analysis",
          description: "Analyze your target market size and competitive landscape",
          resources: ["Market Sizing Calculator", "Competitor Analysis Framework", "TAM/SAM/SOM Template"],
        },
      ],
    },
    {
      id: "building",
      title: "Building & Development",
      description: "Develop your product and prepare for launch",
      steps: [
        {
          title: "Product Roadmap",
          description: "Create a strategic plan for product development",
          resources: ["Product Roadmap Template", "Feature Prioritization Framework", "Development Timeline Tool"],
        },
        {
          title: "MVP Development",
          description: "Build the minimum viable product to test with users",
          resources: ["MVP Specification Template", "Development Resource Guide", "Testing Protocol Framework"],
        },
        {
          title: "User Testing",
          description: "Gather feedback from early users to refine your product",
          resources: ["User Testing Script", "Feedback Analysis Tool", "Iteration Planning Template"],
        },
      ],
    },
    {
      id: "growth",
      title: "Growth & Scaling",
      description: "Acquire customers and scale your business operations",
      steps: [
        {
          title: "Customer Acquisition",
          description: "Develop strategies to attract and convert customers",
          resources: ["Marketing Channel Strategy", "Customer Acquisition Cost Calculator", "Growth Metrics Dashboard"],
        },
        {
          title: "Operational Scaling",
          description: "Scale your operations to meet growing demand",
          resources: ["Operational Scaling Checklist", "Team Growth Planning", "Process Documentation Template"],
        },
        {
          title: "Fundraising",
          description: "Secure funding to support your growth plans",
          resources: ["Investor Pitch Deck Template", "Fundraising Strategy Guide", "Valuation Calculator"],
        },
      ],
    },
    {
      id: "optimization",
      title: "Optimization & Expansion",
      description: "Optimize your business model and explore new opportunities",
      steps: [
        {
          title: "Business Model Optimization",
          description: "Refine your business model for profitability and sustainability",
          resources: ["Revenue Model Analysis Tool", "Pricing Strategy Framework", "Unit Economics Calculator"],
        },
        {
          title: "Market Expansion",
          description: "Identify and enter new markets or segments",
          resources: ["Market Entry Strategy Template", "Expansion Readiness Assessment", "International Growth Guide"],
        },
        {
          title: "Strategic Partnerships",
          description: "Develop partnerships to accelerate growth",
          resources: [
            "Partnership Evaluation Matrix",
            "Collaboration Agreement Template",
            "Alliance Strategy Framework",
          ],
        },
      ],
    },
  ]

  const currentStage = stages.find((stage) => stage.id === activeStage)

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Startup Journey</CardTitle>
          <CardDescription>Follow our structured process guide</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-1">
            {stages.map((stage, index) => (
              <div key={stage.id}>
                <Button
                  variant={activeStage === stage.id ? "default" : "ghost"}
                  className="w-full justify-start rounded-none h-auto py-3"
                  onClick={() => setActiveStage(stage.id)}
                >
                  <div className="flex items-center gap-2">
                    {activeStage === stage.id ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
                    <div className="text-left">
                      <div className="font-medium">{stage.title}</div>
                      <div className="text-xs text-muted-foreground line-clamp-1">{stage.description}</div>
                    </div>
                  </div>
                </Button>
                {index < stages.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>{currentStage?.title}</CardTitle>
          <CardDescription>{currentStage?.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentStage?.steps.map((step, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>

                  <div className="pt-2">
                    <h4 className="text-sm font-medium mb-2">Resources:</h4>
                    <ul className="space-y-1">
                      {step.resources.map((resource, i) => (
                        <li key={i} className="text-sm">
                          <Button variant="link" className="h-auto p-0 text-primary">
                            {resource}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            Connect with a Mentor for This Stage
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

