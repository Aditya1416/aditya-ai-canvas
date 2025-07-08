
import { Briefcase, GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'AWS Cloud Intern',
      company: 'Eduskills',
      location: 'Remote',
      period: 'Jan 2024 - Mar 2024',
      description: 'Gained hands-on experience with AWS cloud services and infrastructure automation.',
      achievements: [
        'Implemented Kubernetes clusters on AWS using Terraform',
        'Reduced deployment time by 60%',
        'Achieved 15% reduction in infrastructure costs'
      ],
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Cloud Computing']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering (AI & ML)',
      institution: 'SRM Institute of Science and Technology',
      location: 'Kattankulathur, Tamil Nadu',
      period: '2022 - 2026',
      gpa: '7.46/10.0',
      focus: 'Artificial Intelligence & Machine Learning',
      achievements: [
        'Specialization in AI and Machine Learning',
        'Active member of coding clubs and technical societies',
        'Participated in multiple hackathons and coding competitions'
      ]
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      institution: "St. Patrick's School",
      location: 'India',
      period: '2020 - 2022',
      gpa: '71.8%',
      focus: 'Science Stream',
      achievements: [
        'Science stream with focus on Mathematics and Physics',
        'Participated in various academic competitions',
        'Active in extracurricular activities'
      ]
    },
    {
      degree: 'Secondary Education (Class X)',
      institution: "St. Patrick's School",
      location: 'India',
      period: '2018 - 2020',
      gpa: '91.6%',
      focus: 'General Studies',
      achievements: [
        'Achieved distinction with 91.6% marks',
        'Strong foundation in Mathematics and Science',
        'Consistent academic performance'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Cloud & ML Foundations',
      issuer: 'AWS Academy',
      date: '2024',
      credentialId: 'AWS-ACAD-2024'
    },
    {
      name: 'Generative AI Specialization',
      issuer: 'Google Cloud',
      date: '2024',
      credentialId: 'GCP-GenAI-2024'
    },
    {
      name: 'Natural Language Processing Course',
      issuer: 'Great Learning',
      date: '2023',
      credentialId: 'GL-NLP-2023'
    },
    {
      name: 'RDBMS Essentials',
      issuer: 'IBM',
      date: '2023',
      credentialId: 'IBM-RDBMS-2023'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional experience in technology and machine learning
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
                      <span>Score: {edu.gpa}</span>
                    </div>
                    <p className="text-muted-foreground mt-2">Focus: {edu.focus}</p>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Highlights:</h4>
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
