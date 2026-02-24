<script lang="ts">
  import { db, type ISpreadsheetData } from "../db";
  import { bookDetails } from "../globalState.svelte";

  function CloseView(event: MouseEvent) {
    // event.stopPropagation();
    bookDetails.activeView = false;
  }

  // Fallback image when none is provided
  const placeholderImage = "https://via.placeholder.com/128x180?text=No+Cover";

  // Helper to display pages safely
  let pagesDisplay =
    bookDetails.data.num_of_pages && Number(bookDetails.data.num_of_pages) > 0
      ? bookDetails.data.num_of_pages
      : "N/A";
</script>

<div class="book-card">
  {#if bookDetails.data.image_links}
    <img
      src={bookDetails.data.image_links}
      alt={`Cover of ${bookDetails.data.book_name}`}
      class="cover"
    />
  {:else}
    <img
      src={placeholderImage}
      alt="No cover available"
      class="cover placeholder"
    />
  {/if}

  <div class="details">
    <button aria-label="Close book view" onclick={CloseView} class="close">X</button>
    <h3 class="title">{bookDetails.data.book_name || "Untitled"}</h3>
    <p class="author">by {bookDetails.data.author || "Unknown Author"}</p>

    <div class="meta-grid">
      <span class="meta-label">Accession:</span>
      <span class="meta-value">{bookDetails.data.accession || "—"}</span>

      <span class="meta-label">ISBN:</span>
      <span class="meta-value">{bookDetails.data.isbn || "—"}</span>

      <span class="meta-label">Type:</span>
      <span class="meta-value">{bookDetails.data.book_type || "—"}</span>

      <span class="meta-label">Published:</span>
      <span class="meta-value">{bookDetails.data.published || "—"}</span>

      <span class="meta-label">Pages:</span>
      <span class="meta-value">{pagesDisplay}</span>

      <span class="meta-label">Language:</span>
      <span class="meta-value">{bookDetails.data.language || "N/A"}</span>
    </div>
  </div>
</div>

<style>
  img {
    aspect-ratio: 16 / 9;
    max-width: 100%;
    object-fit: fill;
    display: block;
  }
  .close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 3ch;
    text-align: center;

    &:hover {
      background-color: rgb(252, 52, 52);
      border: none;
    }
  }
  .book-card {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    width: 30vw;
    max-height: 40vh;
    align-self: center;
    justify-self: right;
    gap: 1.5rem;
    background: #d1d1d1;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
    overflow: hidden;
    z-index: 2;
  }

  .book-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .cover {
    max-width: 40%;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    background-color: #f5f5f5;
    background-color: red;
  }
  /* 
  .cover.placeholder {
    object-fit: contain;
    padding: 1rem;
    background: #eee;
  } */

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .title {
    margin: 0 0 0.25rem 0;
    /* font-size: 1.4rem; */
    font-weight: 600;
    line-height: 1.3;
    color: #1e293b;
  }

  .author {
    margin: 0 0 1rem 0;
    font-size: 1rem;
    color: #475569;
    font-style: italic;
  }

  .meta-grid {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem 1rem;
    align-items: baseline;
    font-size: 0.95rem;
  }

  .meta-label {
    font-weight: 600;
    color: #334155;
  }

  .meta-value {
    color: #0f172a;
    word-break: break-word;
  }

  /* Optional: small screen adjustments */
  @media (max-width: 480px) {
    .book-card {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .meta-grid {
      grid-template-columns: 1fr;
      text-align: left;
      margin-top: 0.5rem;
    }

    .meta-label {
      margin-top: 0.25rem;
    }
  }
</style>
