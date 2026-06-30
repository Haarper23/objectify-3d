/**
 * Single source of truth for portfolio projects.
 *
 * ── How to add a new project ────────────────────────────────────────────────
 * 1. Drop the image file into `public/images/` (e.g. `public/images/ornek.jpg`).
 * 2. Add one object to the `projects` array below.
 * 3. Reference the image with a root-absolute path: `image: "/images/ornek.jpg"`.
 *
 * You never need to edit any component to add a project — the works gallery
 * reads from this array. While it is empty, the site shows a tasteful Turkish
 * "coming soon" state automatically.
 *
 * Display order: controlled by the optional `order` field (ascending). Items
 * without `order` fall back to their position in the array. Mark a piece with
 * `featured: true` to surface it first within its order group.
 */
export type ProjectItem = {
  /** Stable unique id. */
  id: string;
  /** URL-safe identifier (kept for future detail routes / deep links). */
  slug: string;
  title: string;
  shortTitle?: string;
  description?: string;
  shortDescription?: string;
  category?: string;
  /** Root-absolute path under /public, e.g. "/images/piece.jpg". */
  image: string;
  /** Optional additional views of the same piece. */
  images?: string[];
  /** Required for accessibility — describe the image. */
  alt: string;
  tags?: string[];
  featured?: boolean;
  /** Lower numbers appear first. */
  order?: number;
};

export const projects: ProjectItem[] = [];

/**
 * Projects in display order: featured first, then by `order` (ascending), then
 * by original array position. Components should consume this rather than the
 * raw array so ordering stays consistent everywhere.
 */
export const orderedProjects: ProjectItem[] = [...projects]
  .map((project, index) => ({ project, index }))
  .sort((a, b) => {
    if (a.project.featured !== b.project.featured) {
      return a.project.featured ? -1 : 1;
    }
    const orderA = a.project.order ?? Number.POSITIVE_INFINITY;
    const orderB = b.project.order ?? Number.POSITIVE_INFINITY;
    if (orderA !== orderB) return orderA - orderB;
    return a.index - b.index;
  })
  .map(({ project }) => project);

export const hasProjects = orderedProjects.length > 0;
