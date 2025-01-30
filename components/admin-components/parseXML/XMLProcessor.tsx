'use client';

import React, { useState } from 'react';
import { Upload, FileText, Check, AlertCircle, LinkIcon, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { stages } from './XMLParser';
import getTagsMap from '@/lib/xml-parser/getTagsMap';
import { useXmlParser } from '@/app/admin/context';
import axios from "axios";

export default function XmlProcessor({ setCurrentStage }: { setCurrentStage: React.Dispatch<React.SetStateAction<keyof typeof stages>> }) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [inputValue, setInputValue] = useState<string>('');
  const [data, setData] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<string>("upload");

  const { setXmlString } = useXmlParser();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setFileName(file.name);
        setUploadStatus('success');
        toast({
          title: "File Uploaded",
          description: "Your XML file has been successfully processed.",
        });
        const content = reader.result as string;
        setData(content);
        setXmlString(content)
        // console.log(content.length)
      };

      reader.onerror = () => {
        console.error("Error reading the file.");
        setUploadStatus('error');
        toast({
          title: "Upload Error",
          description: "There was an error processing your file.",
          variant: "destructive",
        });
      };

      reader.readAsText(file)
    }
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFetchStart = async () => {
    try {
      const response = await axios.post("/api/getProducts", { url: inputValue });

      console.log(response.data.data)
      setData(response.data.data);
      setXmlString(response.data.data)
      setUploadStatus('success');
      toast({
        title: "XML Fetched",
        description: "The XML content has been successfully retrieved and processed.",
      });
    } catch (error) {
      console.error("Error fetching XML:", error);
      setUploadStatus('error');
      toast({
        title: "Fetch Error",
        description: "There was an error fetching the XML content.",
        variant: "destructive",
      });
    }
  };

  const handleGetTags = async () => {
    if(data) {
        console.log(data)
        const tagsMap = await getTagsMap(data);

        sessionStorage.setItem("tagsMap", JSON.stringify(tagsMap))

        setCurrentStage("configurator")
    }
  }
  return (
    <Card className="w-full mx-auto rounded-xl shadow-lg">
      <CardHeader className="bg-black text-primary-foreground rounded-t-xl">
        <CardTitle className="text-[26px] font-bold text-white">XML Processor</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="upload" className="w-full" onValueChange={(value) => setCurrentTab(value)}>
          <TabsList className="grid w-full grid-cols-2 rounded-lg mb-6">
            <TabsTrigger value="upload" className="rounded-l-lg text-base-medium data-[state=active]:bg-black data-[state=active]:text-white">Upload XML File</TabsTrigger>
            <TabsTrigger value="url" className="rounded-r-lg text-base-medium data-[state=active]:bg-black data-[state=active]:text-white">Fetch XML from URL</TabsTrigger>
          </TabsList>
          <TabsContent value="upload">
            <div className="space-y-4">
              <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 transition-colors duration-300">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 mb-3 text-gray-400" />
                    <p className="mb-2 text-small-semibold text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-subtle-medium text-gray-500 dark:text-gray-400">XML files only</p>
                  </div>
                  <input id="dropzone-file" type="file" accept=".xml" className="hidden" onChange={handleFileUpload} />
                </label>
              </div>
              <p className="text-small-regular text-gray-500 text-center">Upload an XML file to process the products</p>
            </div>
          </TabsContent>
          <TabsContent value="url">
            <div className="space-y-4">
              <div className="flex items-center gap-2 max-[460px]:flex-col">
                <Input
                  placeholder="XML URL"
                  value={inputValue}
                  onChange={handleChange}
                  className="flex-grow rounded-lg text-base-regular"
                />
                <Button onClick={handleFetchStart} className="max-[460px]:w-full rounded-lg text-base-medium text-white">
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Fetch XML
                </Button>
              </div>
              <p className="text-small-regular text-gray-500 text-center">Enter the URL of your XML file to fetch and process the products</p>
            </div>
          </TabsContent>
        </Tabs>

        {fileName && currentTab !== "url" && (
          <div className={`flex items-center ${uploadStatus === 'success' ? 'text-green-500' : 'text-red-500'} space-x-2 mt-6 justify-center`}>
            <FileText className="w-5 h-5" />
            <span className="text-base-semibold">{fileName}</span>
            {uploadStatus === 'success' ? <Check className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          </div>
        )}

        <div className="w-full h-[2px] bg-gray-200 my-6 rounded-full"></div>

        <div className="w-full flex justify-end">
            <Button 
                onClick={handleGetTags} 
                className="text-base-semibold flex justify-center text-white"
            >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
            </Button>

        </div>
      </CardContent>
    </Card>
  );
}

