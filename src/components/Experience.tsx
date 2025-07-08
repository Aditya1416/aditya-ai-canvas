
import { Briefcase, GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior ML Engineer',
      company: 'Tech Innovations Ltd.',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Leading ML initiatives and developing scalable AI solutions for enterprise clients.',
      achievements: [
        'Developed end-to-end ML pipelines serving 1M+ users',
        'Improved model accuracy by 25% through advanced feature engineering',
        'Led team of 5 engineers on computer vision projects'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      type: 'work',
      title: 'ML Developer',
      company: 'AI Dynamics',
      location: 'San Francisco, CA',
      period: '2022 - 2023',
      description: 'Built and deployed machine learning models for healthcare and fintech applications.',
      achievements: [
        'Deployed 15+ ML models to production environments',
        'Reduced inference time by 40% through model optimization',
        'Implemented MLOps best practices across the organization'
      ],
      technologies: ['PyTorch', 'FastAPI', 'PostgreSQL', 'Redis', 'GCP']
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Technology',
      location: 'California, USA',
      period: '2020 - 2022',
      gpa: '3.8/4.0',
      focus: 'Machine Learning & Artificial Intelligence',
      achievements: [
        'Thesis on Deep Learning for Medical Image Analysis',
        'Teaching Assistant for AI/ML courses',
        'President of AI Research Club'
      ]
    },
    {
      degree: 'Bachelor of Technology in Computer Engineering',
      institution: 'Institute of Engineering',
      location: 'India',
      period: '2016 - 2020',
      gpa: '3.7/4.0',
      focus: 'Software Engineering & Data Structures',
      achievements: [
        'Graduated Magna Cum Laude',
        'Winner of Annual Hackathon 2019',
        'Published 3 research papers in AI conferences'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Machine Learning - Specialty',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-MLS-2023-001'
    },
    {
      name: 'TensorFlow Professional Developer Certificate',
      issuer: 'Google',
      date: '2022',
      credentialId: 'TF-PRO-2022-456'
    },
    {
      name: 'Deep Learning Specialization',
      issuer: 'Coursera (deeplearning.ai)',
      date: '2021',
      credentialId: 'DL-SPEC-2021-789'
    },
    {
      name: 'Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      credentialId: 'CKA-2023-012'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background in technology and machine learning
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{edu.degree}</CardTitle>
                    <p className="text-lg text-primary font-semibold">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                    <p className="text-muted-foreground mt-2">Focus: {edu.focus}</p>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{cert.date}</span>
                        <span>ID: {cert.credentialId}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
