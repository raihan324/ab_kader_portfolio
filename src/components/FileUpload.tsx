
import React, { useState, useRef, useCallback } from 'react';
import { Upload, X, File, Image, Video, Music, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import FileUploadItem from './FileUploadItem';

interface FileWithProgress {
  file: File;
  progress: number;
  id: string;
  status: 'uploading' | 'completed' | 'error';
}

const FileUpload = () => {
  const [files, setFiles] = useState<FileWithProgress[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) return Image;
    if (fileType.startsWith('video/')) return Video;
    if (fileType.startsWith('audio/')) return Music;
    if (fileType.includes('text') || fileType.includes('document')) return FileText;
    return File;
  };

  const simulateUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setFiles(prev => prev.map(f => 
          f.id === fileId ? { ...f, progress: 100, status: 'completed' } : f
        ));
      } else {
        setFiles(prev => prev.map(f => 
          f.id === fileId ? { ...f, progress } : f
        ));
      }
    }, 200);
  };

  const addFiles = useCallback((newFiles: File[]) => {
    const filesWithProgress: FileWithProgress[] = newFiles.map(file => ({
      file,
      progress: 0,
      id: generateId(),
      status: 'uploading' as const
    }));

    setFiles(prev => [...prev, ...filesWithProgress]);

    // Simulate upload for each file
    filesWithProgress.forEach(({ id }) => {
      setTimeout(() => simulateUpload(id), Math.random() * 500);
    });
  }, []);

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  }, [addFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      addFiles(selectedFiles);
    }
  }, [addFiles]);

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
      {/* Upload Area */}
      <div
        className={cn(
          "relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer",
          isDragOver 
            ? "border-blue-500 bg-blue-50 scale-105" 
            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={openFileDialog}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          accept="*/*"
        />
        
        <div className="space-y-4">
          <div className={cn(
            "mx-auto w-16 h-16 rounded-full flex items-center justify-center transition-colors",
            isDragOver ? "bg-blue-100" : "bg-gray-100"
          )}>
            <Upload className={cn(
              "w-8 h-8 transition-colors",
              isDragOver ? "text-blue-600" : "text-gray-600"
            )} />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {isDragOver ? "Drop files here" : "Upload your files"}
            </h3>
            <p className="text-gray-600">
              Drag and drop files here, or click to select files
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Support for multiple file formats
            </p>
          </div>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-gray-900">
            Uploaded Files ({files.length})
          </h4>
          <div className="space-y-2">
            {files.map((fileWithProgress) => (
              <FileUploadItem
                key={fileWithProgress.id}
                fileWithProgress={fileWithProgress}
                onRemove={removeFile}
                getFileIcon={getFileIcon}
              />
            ))}
          </div>
        </div>
      )}

      {/* Upload Summary */}
      {files.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">
              {files.filter(f => f.status === 'completed').length} of {files.length} files completed
            </span>
            <span className="text-gray-600">
              {(files.reduce((acc, f) => acc + f.file.size, 0) / 1024 / 1024).toFixed(2)} MB total
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
