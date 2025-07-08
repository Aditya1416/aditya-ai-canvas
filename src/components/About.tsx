
import { GraduationCap, Award, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Machine Learning Developer with a strong background in building scalable AI solutions. 
            My journey in tech combines academic excellence with practical experience in deploying ML models at scale.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <Card className="text-center border-slate-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-slate-800">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-slate-600">
                <div>
                  <p className="font-medium">M.S. Computer Science</p>
                  <p className="text-sm">University of Technology</p>
                  <p className="text-sm">2020-2022</p>
                </div>
                <div>
                  <p className="font-medium">B.Tech Computer Engineering</p>
                  <p className="text-sm">Institute of Engineering</p>
                  <p className="text-sm">2016-2020</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-slate-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl text-slate-800">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-slate-600">
                <div>
                  <p className="font-medium">AWS Certified ML Specialty</p>
                  <p className="text-sm">Amazon Web Services</p>
                </div>
                <div>
                  <p className="font-medium">TensorFlow Developer</p>
                  <p className="text-sm">Google</p>
                </div>
                <div>
                  <p className="font-medium">Deep Learning Specialization</p>
                  <p className="text-sm">Coursera</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-slate-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-xl text-slate-800">Volunteer Work</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-slate-600">
                <div>
                  <p className="font-medium">AI for Good Initiative</p>
                  <p className="text-sm">Teaching ML to underserved communities</p>
                </div>
                <div>
                  <p className="font-medium">Open Source Contributor</p>
                  <p className="text-sm">Contributing to ML libraries</p>
                </div>
                <div>
                  <p className="font-medium">Tech Mentorship</p>
                  <p className="text-sm">Guiding junior developers</p>
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
