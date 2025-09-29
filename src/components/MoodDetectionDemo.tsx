import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { 
  Camera, 
  Mic, 
  Type, 
  Play, 
  Square, 
  Loader2,
  Star,
  Calendar,
  Clock
} from "lucide-react";

interface Movie {
  title: string;
  genre: string;
  year: number;
  rating: number;
  description: string;
  mood_match: string;
}

interface MoodDetectionDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MoodDetectionDemo = ({ isOpen, onClose }: MoodDetectionDemoProps) => {
  const [activeTab, setActiveTab] = useState("text");
  const [textMood, setTextMood] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const mockMovies: Movie[] = [
    {
      title: "The Pursuit of Happyness",
      genre: "Drama",
      year: 2006,
      rating: 8.0,
      description: "A heartwarming story of perseverance and hope",
      mood_match: "inspiring"
    },
    {
      title: "Inception",
      genre: "Sci-Fi",
      year: 2010,
      rating: 8.8,
      description: "A mind-bending thriller about dreams within dreams",
      mood_match: "curious"
    },
    {
      title: "The Grand Budapest Hotel",
      genre: "Comedy",
      year: 2014,
      rating: 8.1,
      description: "A whimsical adventure in a famous European hotel",
      mood_match: "cheerful"
    },
    {
      title: "Blade Runner 2049",
      genre: "Sci-Fi",
      year: 2017,
      rating: 8.0,
      description: "A visually stunning exploration of humanity",
      mood_match: "contemplative"
    }
  ];

  const detectMoodFromText = async (text: string) => {
    setIsProcessing(true);
    try {
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simple mood detection logic
      const lowerText = text.toLowerCase();
      let detectedMood = "neutral";
      
      if (lowerText.includes("happy") || lowerText.includes("excited") || lowerText.includes("great")) {
        detectedMood = "cheerful";
      } else if (lowerText.includes("sad") || lowerText.includes("down") || lowerText.includes("upset")) {
        detectedMood = "melancholy";
      } else if (lowerText.includes("curious") || lowerText.includes("interested") || lowerText.includes("wonder")) {
        detectedMood = "curious";
      } else if (lowerText.includes("inspired") || lowerText.includes("motivated")) {
        detectedMood = "inspiring";
      } else if (lowerText.includes("thinking") || lowerText.includes("reflect")) {
        detectedMood = "contemplative";
      }

      const filteredMovies = mockMovies.filter(movie => 
        movie.mood_match === detectedMood
      );
      
      setRecommendations(filteredMovies.length > 0 ? filteredMovies : mockMovies.slice(0, 2));
      
      toast({
        title: "Mood Detected!",
        description: `We detected you're feeling ${detectedMood}. Here are your recommendations!`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process mood. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 },
        audio: false 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsCameraActive(true);
      }
    } catch (error) {
      toast({
        title: "Camera Error",
        description: "Unable to access camera. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  const captureImage = async () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    setIsProcessing(true);
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    if (context) {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);
      
      // Simulate facial emotion detection
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const randomMoods = ["cheerful", "contemplative", "curious", "inspiring"];
      const detectedMood = randomMoods[Math.floor(Math.random() * randomMoods.length)];
      
      const filteredMovies = mockMovies.filter(movie => 
        movie.mood_match === detectedMood
      );
      
      setRecommendations(filteredMovies.length > 0 ? filteredMovies : mockMovies.slice(0, 2));
      
      toast({
        title: "Facial Expression Analyzed!",
        description: `Based on your expression, you seem ${detectedMood}. Check out these recommendations!`,
      });
      
      stopCamera();
    }
    setIsProcessing(false);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      streamRef.current = stream;
      
      const audioChunks: BlobPart[] = [];
      
      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };
      
      mediaRecorder.onstop = async () => {
        setIsProcessing(true);
        
        // Simulate voice analysis
        await new Promise(resolve => setTimeout(resolve, 2500));
        
        const randomMoods = ["cheerful", "contemplative", "curious", "inspiring"];
        const detectedMood = randomMoods[Math.floor(Math.random() * randomMoods.length)];
        
        const filteredMovies = mockMovies.filter(movie => 
          movie.mood_match === detectedMood
        );
        
        setRecommendations(filteredMovies.length > 0 ? filteredMovies : mockMovies.slice(0, 2));
        
        toast({
          title: "Voice Tone Analyzed!",
          description: `Your voice suggests you're feeling ${detectedMood}. Here are your picks!`,
        });
        
        setIsProcessing(false);
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start();
      setIsRecording(true);
      
      // Auto stop after 5 seconds
      setTimeout(() => {
        if (mediaRecorderRef.current && isRecording) {
          stopRecording();
        }
      }, 5000);
      
    } catch (error) {
      toast({
        title: "Microphone Error",
        description: "Unable to access microphone. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            AI Mood Detection Demo
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="text" className="flex items-center gap-2">
              <Type className="w-4 h-4" />
              Text Input
            </TabsTrigger>
            <TabsTrigger value="camera" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Camera
            </TabsTrigger>
            <TabsTrigger value="microphone" className="flex items-center gap-2">
              <Mic className="w-4 h-4" />
              Voice
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="text" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Describe How You're Feeling</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="I'm feeling excited about watching something new..."
                  value={textMood}
                  onChange={(e) => setTextMood(e.target.value)}
                  className="min-h-[60px]"
                />
                <Button 
                  onClick={() => detectMoodFromText(textMood)}
                  disabled={!textMood.trim() || isProcessing}
                  className="w-full"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing Mood...
                    </>
                  ) : (
                    "Get Recommendations"
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="camera" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Facial Expression Detection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative bg-muted rounded-lg overflow-hidden">
                  {isCameraActive ? (
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <div className="w-full h-64 flex items-center justify-center text-muted-foreground">
                      <Camera className="w-16 h-16" />
                    </div>
                  )}
                </div>
                <canvas ref={canvasRef} className="hidden" />
                <div className="flex gap-2">
                  {!isCameraActive ? (
                    <Button onClick={startCamera} className="flex-1">
                      <Camera className="w-4 h-4 mr-2" />
                      Start Camera
                    </Button>
                  ) : (
                    <>
                      <Button 
                        onClick={captureImage}
                        disabled={isProcessing}
                        className="flex-1"
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          "Capture & Analyze"
                        )}
                      </Button>
                      <Button onClick={stopCamera} variant="outline">
                        Stop Camera
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="microphone" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Voice Tone Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-8">
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full border-4 ${
                    isRecording ? 'border-red-500 bg-red-50' : 'border-muted bg-muted'
                  } transition-colors`}>
                    <Mic className={`w-8 h-8 ${isRecording ? 'text-red-500' : 'text-muted-foreground'}`} />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {isRecording ? 'Recording... Speak naturally about how you feel' : 'Click to start recording your voice'}
                  </p>
                </div>
                <Button 
                  onClick={isRecording ? stopRecording : startRecording}
                  disabled={isProcessing}
                  className="w-full"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing Voice...
                    </>
                  ) : isRecording ? (
                    <>
                      <Square className="w-4 h-4 mr-2" />
                      Stop Recording
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Start Recording
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {recommendations.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Your Personalized Recommendations</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {recommendations.map((movie, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{movie.title}</h4>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm">{movie.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {movie.year}
                      </span>
                      <span>{movie.genre}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{movie.description}</p>
                    <div className="mt-3">
                      <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                        Perfect for {movie.mood_match} mood
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};