'use client';
import React from 'react';
// import { CheckIcon } from 'react-icons/check';
import { Button } from './button';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './card'; 

const PricingCard = ({ title, description, features, buttonLabel, onButtonClick }) => (
  <Card className="bg-background p-6 rounded-lg shadow-sm">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            {/* <CheckIcon className="w-5 h-5 text-primary" /> */}
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter>
      <Button onClick={onButtonClick}>{buttonLabel}</Button>
    </CardFooter>
  </Card>
);

export default function Pricing() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pricing</h2>
        <p className="text-muted-foreground text-lg">
          Our pricing is simple and transparent. Choose the plan that best fits your needs.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <PricingCard
          title="Free"
          description="Get started for free"
          features={['10 quiz per month', 'Basic quiz customization', 'Unlimited viewers']}
          buttonLabel="Get Started"
          onButtonClick={() => alert('Free plan selected')}
        />
        <PricingCard
          title="Pro"
          description="For teams and businesses"
          features={[
            'Unlimited quizzes',
            'Advanced quiz customization',
            'Analytics and reporting',
            'Team collaboration',
          ]}
          buttonLabel="Get Started"
          onButtonClick={() => alert('Pro plan selected')}
        />
        <PricingCard
          title="Enterprise"
          description="Tailored for large organizations"
          features={[
            'Dedicated account manager',
            'Custom branding and integrations',
            'Advanced security and compliance',
            'Scalable for large audiences',
          ]}
          buttonLabel="Contact Sales"
          onButtonClick={() => alert('Contact sales')}
        />
      </div>
    </section>
  );
}
