


@mixin pagination-size($padding-y, $padding-x, $font-size, $border-radius) {
  .page-link {
    padding: $padding-y $padding-x;
    @include font-size($font-size);
  }

  .page-item {
    @if $pagination-margin-start == (-$pagination-border-width) {
      &:first-child {
        .page-link {
          @include border-start-radius($border-radius);
        }
      }

      &:last-child {
        .page-link {
          @include border-end-radius($border-radius);
        }
      }
    } @else {
      //Add border-radius to all pageLinks in case they have left margin
      .page-link {
        @include border-radius($border-radius);
      }
    }
  }
}
