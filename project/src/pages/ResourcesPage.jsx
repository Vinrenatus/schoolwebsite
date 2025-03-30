import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

const ResourcesPage = () => {
  const { currentUser } = useAuth();
  const [files, setFiles] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    type: "exam",
    file: null,
  });
  const [uploadStatus, setUploadStatus] = useState(null);

  useEffect(() => {
    const sampleFiles = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      type: i % 2 === 0 ? "exam" : "marking",
      title: `Sample ${i % 2 === 0 ? "Exam" : "Marking"} ${i + 1}`,
      description: `Sample ${i % 2 === 0 ? "exam paper" : "marking scheme"} description`,
      price: (Math.random() * 10 + 1).toFixed(2),
      uploadedAt: new Date(Date.now() - i * 86400000).toISOString().split('T')[0],
      file: `https://example.com/sample${i + 1}.pdf`,
      owner: "Admin",
      views: Math.floor(Math.random() * 100),
      downloads: Math.floor(Math.random() * 50),
    }));
    setFiles(sampleFiles);
    setFilteredFiles(sampleFiles);
  }, []);

  useEffect(() => {
    const filtered = files.filter(file =>
      file.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeFilter === "all" || file.type === activeFilter)
    );
    setFilteredFiles(filtered);
  }, [searchQuery, activeFilter, files]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleUpload = async () => {
    if (!formData.file) return;

    setUploadStatus("Uploading...");
    
    setTimeout(() => {
      const newFile = {
        id: files.length + 1,
        ...formData,
        uploadedAt: new Date().toISOString().split('T')[0],
        owner: currentUser?.name || 'User',
        file: URL.createObjectURL(formData.file),
        views: 0,
        downloads: 0,
      };
      
      setFiles([...files, newFile]);
      setFormData({
        title: "",
        description: "",
        price: 0,
        type: "exam",
        file: null,
      });
      setUploadStatus("Success!");
      setTimeout(() => setShowUploadModal(false), 1000);
    }, 2000);
  };

  const handlePreview = (file) => {
    setPreviewFile(file);
  };

  const handleDownload = (file) => {
    alert(`Downloading ${file.title}`);
    const updatedFiles = files.map(f =>
      f.id === file.id ? { ...f, downloads: f.downloads + 1 } : f
    );
    setFiles(updatedFiles);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          Resource Library
        </h1>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
          <div className="flex gap-2 flex-wrap">
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === "all" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === "exam" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              }`}
              onClick={() => setActiveFilter("exam")}
            >
              Exam Papers
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === "marking" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              }`}
              onClick={() => setActiveFilter("marking")}
            >
              Marking Schemes
            </button>
          </div>
        </div>
      </div>

      {currentUser && (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded mb-6 hover:bg-blue-700 transition-colors"
          onClick={() => setShowUploadModal(true)}
        >
          New Resource
        </button>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredFiles.map((file) => (
          <div
            key={file.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex-shrink-0">
                <svg
                  className="h-10 w-10 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5v-7a1 1 0 00-1-1H5a1 1 0 00-1 1v7h14zm-3-9a2 2 0 012 2m0 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v7H5a2 2 0 00-2 2h14a2 2 0 002-2v-2"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg text-gray-800 dark:text-white line-clamp-1">
                  {file.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {file.description}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  file.type === 'exam' 
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' 
                    : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                }`}>
                  {file.type === 'exam' ? 'Exam Paper' : 'Marking Scheme'}
                </span>
              </div>
              <span className="text-primary-600 font-medium text-sm">${file.price}</span>
            </div>

            <div className="flex justify-between items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
              <div className="flex items-center space-x-2">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{file.uploadedAt}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>{file.owner}</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <button
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  onClick={() => handlePreview(file)}
                >
                  Preview
                </button>
                <button
                  className="text-green-600 hover:text-green-700 dark:text-green-400"
                  onClick={() => handleDownload(file)}
                >
                  Download
                </button>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7-1.274 7-2.542 7-2.542-2.943-9.542-7z"
                  />
                </svg>
                <span>{file.views}</span>
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>{file.downloads}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {previewFile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-2xl h-[80vh]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {previewFile.title}
              </h3>
              <button
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                onClick={() => setPreviewFile(null)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="h-[calc(100%_-_4rem)] overflow-y-auto">
              <Document
                file={previewFile.file}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={600}
                  />
                ))}
              </Document>
            </div>
          </div>
        </div>
      )}

      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-md space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Upload Resource
            </h3>
            
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Resource Title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                required
              />
              
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                rows="3"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="px-3 py-2 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                  step="0.01"
                  min="0"
                />
                
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="px-3 py-2 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                >
                  <option value="exam">Exam Paper</option>
                  <option value="marking">Marking Scheme</option>
                </select>
              </div>
              
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-400"
                required
              />
            </div>

            <div className="flex justify-end space-x-3 mt-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setShowUploadModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={handleUpload}
              >
                Upload
              </button>
            </div>
            
            {uploadStatus && (
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                {uploadStatus}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesPage;