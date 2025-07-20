
import React from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileWithProgress {
  file: File;
  progress: number;
  id: string;
  status: 'uploading' | 'completed' | 'error';
}

interface FileUploadItemProps {
  fileWithProgress: FileWithProgress;
  onRemove: (id: string) => void;
  getFileIcon: (fileType: string) => React.ComponentType<any>;
}

const FileUploadItem: React.FC<FileUploadItemProps> = ({
  fileWithProgress,
  onRemove,
  getFileIcon
}) => {
  const { file, progress, id, status } = fileWithProgress;
  const FileIcon = getFileIcon(file.type);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 transition-all duration-200 hover:shadow-md">
      <div className="flex items-center space-x-3">
        {/* File Icon */}
        <div className={cn(
          "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
          status === 'completed' ? "bg-green-100" : 
          status === 'error' ? "bg-red-100" : "bg-blue-100"
        )}>
          <FileIcon className={cn(
            "w-5 h-5",
            status === 'completed' ? "text-green-600" : 
            status === 'error' ? "text-red-600" : "text-blue-600"
          )} />
        </div>

        {/* File Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm font-medium text-gray-900 truncate">
              {file.name}
            </p>
            <div className="flex items-center space-x-2">
              {/* Status Icon */}
              {status === 'completed' && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
              {status === 'error' && (
                <AlertCircle className="w-4 h-4 text-red-500" />
              )}
              
              {/* Remove Button */}
              <button
                onClick={() => onRemove(id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>{formatFileSize(file.size)}</span>
            <span>
              {status === 'uploading' && `${Math.round(progress)}%`}
              {status === 'completed' && 'Complete'}
              {status === 'error' && 'Error'}
            </span>
          </div>

          {/* Progress Bar */}
          {status === 'uploading' && (
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-blue-500 h-1.5 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {status === 'completed' && (
            <div className="w-full bg-green-200 rounded-full h-1.5">
              <div className="bg-green-500 h-1.5 rounded-full w-full" />
            </div>
          )}

          {status === 'error' && (
            <div className="w-full bg-red-200 rounded-full h-1.5">
              <div className="bg-red-500 h-1.5 rounded-full w-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploadItem;
