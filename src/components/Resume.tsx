
import { Download, Eye, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Resume = () => {
  const resumeUrl = "https://drive.google.com/file/d/1xjlfZb2o675bY6uANGGSB7S74W9XtMnU/view?usp=sharing";
  const downloadUrl = "https://drive.google.com/uc?export=download&id=1xjlfZb2o675bY6uANGGSB7S74W9XtMnU";

  const handleViewResume = () => {
    window.open(resumeUrl, '_blank');
  };

  const handleDownloadResume = () => {
    window.open(downloadUrl, '_blank');
  };

  const resumeHighlights = [
    {
      category: "Technical Skills",
      items: [
        "Python, R, SQL, JavaScript/TypeScript",
        "TensorFlow, PyTorch, Scikit-learn, Keras",
        "AWS, GCP, Docker, Kubernetes",
        "FastAPI, Flask, React, Node.js"
      ]
    },
    {
      category: "Machine Learning",
      items: [
        "Deep Learning & Neural Networks",
        "Computer Vision & NLP",
        "MLOps & Model Deployment",
        "Statistical Analysis & Feature Engineering"
      ]
    },
    {
      category: "Key Achievements",
      items: [
        "15+ ML models deployed to production",
        "Improved model accuracy by 25%",
        "Led team of 5 engineers",
        "Published 3 research papers"
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Download my complete resume or explore the key highlights below
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="px-8 py-3 rounded-full"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 rounded-full"
              onClick={handleViewResume}
            >
              <Eye className="mr-2 h-5 w-5" />
              View Online
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Resume Preview */}
          <Card className="mb-12 border-border bg-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-2">
                <FileText className="h-6 w-6" />
                Resume Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <FileText className="h-16 w-16 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">
                    Resume preview will be available when the PDF is publicly accessible
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" onClick={handleViewResume}>
                      View Full Resume
                    </Button>
                    <Button onClick={handleDownloadResume}>
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resume Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {resumeHighlights.map((section, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
