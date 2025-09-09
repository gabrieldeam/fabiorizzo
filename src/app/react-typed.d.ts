// src/react-typed.d.ts

declare module 'react-typed' {
    import { Component } from 'react';
  
    interface TypedProps {
      strings: string[];
      typeSpeed?: number;
      backSpeed?: number;
      backDelay?: number;
      loop?: boolean;
      showCursor?: boolean;
      cursorChar?: string;
      startDelay?: number;
      // Outras props que você deseja suportar
    }
  
    export default class Typed extends Component<TypedProps> {}
  }
  