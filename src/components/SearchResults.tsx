import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';

export interface SearchResult {
  title: string;
  href: string;
  description?: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  onClose: () => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results, onClose }) => {
  if (results.length === 0) {
    return null;
  }

  return (
    <div className="absolute left-0 right-0 top-full bg-heritage-cream border-t border-heritage-stone/20 shadow-lg">
      <div className="container mx-auto px-6 py-4 max-h-[70vh] overflow-y-auto">
        <div className="grid gap-4">
          {results.map((result, index) => (
            <Card key={index} className="p-4 hover:bg-accent transition-colors">
              <Link
                to={result.href}
                className="block"
                onClick={() => {
                  onClose();
                }}
              >
                <h3 className="text-lg font-semibold text-heritage-royal">{result.title}</h3>
                {result.description && (
                  <p className="text-sm text-muted-foreground mt-1">{result.description}</p>
                )}
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};