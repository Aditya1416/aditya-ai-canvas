
import { GraduationCap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Machine Learning Developer with hands-on experience in end-to-end ML pipelines—data preprocessing, 
            model building, deployment, and performance tuning. Currently pursuing B.Tech in Computer Science & Engineering with 
            specialization in AI & ML at SRM Institute of Science and Technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="text-center border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">B.Tech CSE (AI & ML)</p>
                  <p className="text-sm">SRM Institute of Science and Technology</p>
                  <p className="text-sm">2022-2026 • CGPA: 7.46/10.0</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Higher Secondary (XII)</p>
                  <p className="text-sm">St. Patrick's School</p>
                  <p className="text-sm">2020-2022 • 71.8%</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Secondary (X)</p>
                  <p className="text-sm">St. Patrick's School</p>
                  <p className="text-sm">2018-2020 • 91.6%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">AWS Cloud & ML Foundations</p>
                  <p className="text-sm">AWS Academy</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Generative AI Specialization</p>
                  <p className="text-sm">Google Cloud</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Natural Language Processing</p>
                  <p className="text-sm">Great Learning</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">RDBMS Essentials</p>
                  <p className="text-sm">IBM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
