/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean;
  className?: string;
  id?: string;
}

export default function Container({
  children,
  className = '',
  clean = false,
  id,
  ...props
}: ContainerProps) {
  return (
    <div
      id={id}
      className={`mx-auto w-full ${
        clean ? '' : 'max-w-7xl px-4 sm:px-6 lg:px-8'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
