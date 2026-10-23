import type { PortfolioImage } from '../data/portfolio';

export type ProjectTemplate = 'static' | 'ecommerce' | 'web-app' | 'backend';
export type NodeKind = 'custom' | 'platform' | 'external';
export interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  technology: string;
  kind: NodeKind;
  column: number;
  row: number;
  group?: string;
}
export interface ArchitectureEdge { from: string; to: string; label: string; bidirectional?: boolean; }
export interface ArchitectureGroup { id: string; label: string; }
export interface Architecture {
  title: string;
  caption: string;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  groups?: ArchitectureGroup[];
}
export interface ProcessStage {
  title: string;
  caption: string;
  evidence: string;
  status: 'verified' | 'pending' | 'example';
  artifact?: string[];
}
export interface ImplementationModule {
  name: string;
  responsibility: string;
  technologies: string[];
  sources?: string[];
  connections: string[];
  kind: 'custom' | 'platform';
}
export interface ProjectDecision { need: string; choice: string; effect: string; target: string; }
export interface ProjectCaseStudy {
  slug: string;
  projectId?: string;
  template: ProjectTemplate;
  mode: 'reference' | 'example';
  title: string;
  subtitle: string;
  objective: string;
  role: string;
  scope: string;
  technologies: string[];
  notice: string;
  image?: PortfolioImage;
  gallery?: (PortfolioImage & { caption: string; layout?: 'wide' | 'mobile' })[];
  siteUrl?: string;
  demoUrl?: string;
  repositoryUrl?: string;
  documentationUrl?: string;
  process: ProcessStage[];
  architecture: Architecture;
  modules: ImplementationModule[];
  decisions: ProjectDecision[];
}
