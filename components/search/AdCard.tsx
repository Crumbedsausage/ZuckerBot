import Image from 'next/image';
import { Ad } from '@/types';

interface AdCardProps {
  ad: Ad;
}

export default function AdCard({ ad }: AdCardProps) {
  const platformColors = {
    facebook: 'bg-blue-100 text-blue-800',
    tiktok: 'bg-pink-100 text-pink-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="relative">
        <Image
          src={ad.image}
          alt={ad.headline}
          width={400}
          height={300}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${platformColors[ad.platform]}`}>
            {ad.platform === 'facebook' ? 'Facebook' : 'TikTok'}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {ad.headline}
        </h3>
        
        {ad.description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {ad.description}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{ad.brand}</span>
          {ad.cta && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
              {ad.cta}
            </span>
          )}
        </div>
        
        <div className="mt-3 text-xs text-gray-400">
          Active: {ad.dateRange}
        </div>
      </div>
    </div>
  );
}