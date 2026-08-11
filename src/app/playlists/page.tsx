"use client";

import React, { useState } from "react";
import { mockPlaylists } from "@/lib/mock-data";
import { useUser } from "@/context/UserContext";
import { PlaylistCard } from "@/types";
import {
  PlayCircle,
  Search,
  Clock,
  Tv,
  ExternalLink,
  Filter,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function PlaylistsPage() {
  const { user } = useUser();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<string>("All");
  const [activePlaylist, setActivePlaylist] = useState<PlaylistCard | null>(null);

  const subjects = ["All", ...Array.from(new Set(mockPlaylists.map((p) => p.subject)))];

  const filteredPlaylists = mockPlaylists.filter((playlist) => {
    const matchesSubject = selectedSubject === "All" || playlist.subject === selectedSubject;
    const matchesSearch =
      playlist.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      playlist.channelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      playlist.subject.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200  pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge className="bg-black text-white  ">
              YouTube Video Playlists
            </Badge>
            <span className="text-xs text-gray-500 font-medium">{user?.course}</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-black ">
            Curated Video Lecture Series
          </h1>
          <p className="text-sm text-gray-600  mt-1">
            Hand-picked YouTube playlist tutorials from top educators to master your subject topics visually.
          </p>
        </div>
      </div>

      {/* Search & Subject Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search playlists by topic, educator, or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-11 border-gray-200  bg-white  rounded-xl"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          <Filter className="h-4 w-4 text-gray-400 shrink-0 hidden sm:inline" />
          {subjects.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedSubject === sub
                  ? "bg-black text-white   shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200  "
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Playlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredPlaylists.map((playlist) => (
          <div
            key={playlist.id}
            className="rounded-2xl border border-gray-200 bg-white   overflow-hidden shadow-sm hover:shadow-md transition-all hover:border-black  group flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer" onClick={() => setActivePlaylist(playlist)}>
                <img
                  src={playlist.thumbnail}
                  alt={playlist.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                  <div className="h-14 w-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <PlayCircle className="h-8 w-8 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[11px] font-mono px-2 py-0.5 rounded-md backdrop-blur">
                  {playlist.videoCount} Videos • {playlist.durationHours}h
                </div>
              </div>

              {/* Details */}
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-[10px] font-bold px-1.5 py-0">
                    {playlist.subject}
                  </Badge>
                  <span className="text-[10px] text-gray-400 font-medium truncate ml-2">{playlist.channelName}</span>
                </div>

                <h3 className="text-sm font-bold leading-snug group-hover:underline text-black line-clamp-2">
                  {playlist.title}
                </h3>
              </div>
            </div>

            <div className="px-4 pb-4 pt-3 flex flex-col gap-2 border-t border-gray-100 mt-auto">
              <span className="text-[10px] text-gray-500 font-medium truncate">Curated for {playlist.course}</span>

              <Button
                onClick={() => setActivePlaylist(playlist)}
                className="bg-black text-white rounded-lg h-8 px-3 text-[11px] font-semibold w-full"
              >
                Watch Series →
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredPlaylists.length === 0 && (
        <div className="text-center py-16 border border-dashed border-gray-300  rounded-2xl p-8">
          <Tv className="h-10 w-10 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold">No playlists found</h3>
          <p className="text-sm text-gray-500 mt-1">Try clearing your search query or selecting another subject filter.</p>
        </div>
      )}

      {/* Embedded Video Player Modal */}
      {activePlaylist && (
        <Dialog open={!!activePlaylist} onOpenChange={() => setActivePlaylist(null)}>
          <DialogContent className="sm:max-w-[800px] bg-black text-white border border-gray-800 p-6 rounded-2xl">
            <DialogHeader className="border-b border-gray-800 pb-4">
              <Badge variant="outline" className="text-white border-gray-700 text-[10px] w-fit mb-1">
                {activePlaylist.subject} • {activePlaylist.channelName}
              </Badge>
              <DialogTitle className="text-xl font-bold text-white">{activePlaylist.title}</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 my-2">
              {/* Embedded YouTube Iframe */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activePlaylist.embedId}?autoplay=1`}
                  title={activePlaylist.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400 pt-2">
                <span>{activePlaylist.videoCount} Total Lectures included</span>
                <a
                  href={`https://www.youtube.com/watch?v=${activePlaylist.embedId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-white hover:underline font-bold"
                >
                  Open on YouTube <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
