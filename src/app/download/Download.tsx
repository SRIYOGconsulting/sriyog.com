"use client";
import Ribbon from "@/components/Ribbon";
import { useEffect, useState } from "react";

type FileMeta = {
  title: string;
  url: string;
  size: string;
  type: string;
  lastUpdate: string;
  rawTitle: string;
};
type FileList = {
  url: string;
  size: string;
}
// Updated file paths to /files/ instead of /assets/downloadFiles/
const fileList: FileList[] = [
  { url: "/files/Android-Mobile-WireFrame.pdf", size: "32.48 KB" },
  { url: "/files/Apple-Mobile-WireFrame.pdf", size: "16.50 KB" },
  { url: "/files/Blumind-Mind-Mapping.zip", size: "846.59 KB" },
  { url: "/files/Check-List.pdf", size: "32.80 KB" },
  { url: "/files/Customer-Feedback-Form.pdf", size: "98.85 KB" },
  { url: "/files/Daily-task.pdf", size: "48.68 KB" },
  { url: "/files/Daily-Tasks-Two-in-A4.pdf", size: "108.80 KB" },
  { url: "/files/Download-JDR-Fonts.zip", size: "527.28 KB" },
  { url: "/files/Google-Input-Tools-Nepali.zip", size: "6101.50 KB" },
  { url: "/files/Guestbook-Feedback-Form.pdf", size: "124.43 KB" },

  { url: "/files/Internship-Recommendation-Letter-Draft.docx", size: "8.37 KB" },
  { url: "/files/Internship-Recommendation-Letter-Sample.pdf", size: "467.82 KB" },
  { url: "/files/Internship-Request-Letter-Personal.docx", size: "8.15 KB" },

  { url: "/files/Meeting-Minutes.pdf", size: "44.42 KB" },
  { url: "/files/Safari-Dashboard-Wireframe-landscape.pdf", size: "17.34 KB" },
  { url: "/files/Safari-Wireframe-landscape.pdf", size: "17.22 KB" },
  { url: "/files/Safari-Wireframe.pdf", size: "17.09 KB" },

  { url: "/files/SRIYOG-Consulting-Customer-Feedback-Form.pdf", size: "98.85 KB" },
  { url: "/files/SRIYOG-Consulting-guestbook-feedback-form.pdf", size: "124.43 KB" },
  { url: "/files/SRIYOG-Consulting-Internship-Application-Letter.docx", size: "8.15 KB" },
  { url: "/files/SRIYOG-Consulting-Internship-Recommendation-Letter-From-College.docx", size: "7.21 KB" },
  { url: "/files/sriyog-consulting-logos.zip", size: "268.70 KB" },

  { url: "/files/SRIYOG-Consulting-Meeting-Minutes.pdf", size: "44.42 KB" },
  { url: "/files/SRIYOG-Consulting-Order.docx", size: "9.07 KB" },
  { url: "/files/Work-Order.docx", size: "9.07 KB" },
];


export default function Download() {
  const [files, setFiles] = useState<FileMeta[]>([]);

  const getFileType = (fileName: string): string => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    switch (ext) {
      case "pdf":
        return "PDF Document";
      case "doc":
      case "docx":
        return "Word Document";
      case "zip":
        return "ZIP Archive";
      default:
        return "Unknown";
    }
  };

  const handleDownload = async (url: string, name: string) => {
    const res = await fetch(url);
    const blob = await res.blob();
    const objectUrl = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(objectUrl);
  };

useEffect(() => {
  const metadata: FileMeta[] = fileList.map((file) => {
    const rawTitle = decodeURIComponent(
      file.url.split("/").pop() || "Unknown File"
    );

    const title = rawTitle
      .replace(/\.[^/.]+$/, "")
      .replace(/-/g, " ");

    const type = getFileType(rawTitle);

    return {
      title,
      url: file.url,
      size: file.size,
      type,
      lastUpdate: new Date().toLocaleDateString(),
      rawTitle,
    };
  });

  setFiles(metadata);
}, []);


  return (
    <>
      <Ribbon name="Download" des="" />
      <section className="max-w-[1180px] mx-auto px-4 md:px-6 py-6">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm md:text-base">
            <thead className="bg-gray-200 hidden md:table-header-group rounded-xl">
              <tr>
                <th className="text-left py-3 px-4 whitespace-nowrap">
                  Title
                </th>
                <th className="text-left py-3 px-4 whitespace-nowrap">Size</th>
                <th className="text-left py-3 px-4 whitespace-nowrap">Type</th>
                <th className="text-left py-3 px-4 whitespace-nowrap">
                  Last Updated
                </th>
                <th className="text-left py-3 px-4 whitespace-nowrap">
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
              {files.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } md:table-row ${
                    index % 2 === 0 ? "rounded-xl" : "rounded-md"
                  } shadow-sm p-4 mb-4 block`}
                >
                  <td className="py-3 px-4 mt-2 font-medium block md:table-cell">
                    {item.title}
                  </td>
                  <td className="py-2 px-4 mt-2 block md:table-cell">
                    <span className="md:hidden font-semibold mr-4">
                      File Size:
                    </span>
                    {item.size}
                  </td>
                  <td className="py-2 px-4 mt-2 block md:table-cell">
                    <span className="md:hidden font-semibold mr-4">
                      File Type:
                    </span>
                    {item.type}
                  </td>
                  <td className="py-2 px-4 block mt-2 md:table-cell md:align">
                    <span className="md:hidden font-semibold mr-4">
                      Published Date:
                    </span>
                    {item.lastUpdate}
                  </td>
                  <td className="py-2 px-4 block mt-2 md:table-cell md:align-middle">
                    <span className="md:hidden font-semibold mr-4">
                      Download:
                    </span>
                    <button
                      onClick={() => handleDownload(item.url, item.rawTitle)}
                      className="text-[#055D59] cursor-pointer border-[#055D59] border px-3 py-1 rounded hover:bg-[#044c4a] hover:text-white transition-all duration-200 text-xs md:text-sm"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}